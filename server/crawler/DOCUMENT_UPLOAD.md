# Document Upload Feature

## Overview

The Document Upload feature allows users to upload business documentation (PDFs, Word documents, text files) instead of crawling websites to generate FAQs. This provides an alternative content source for FAQ generation while maintaining the same processing pipeline.

## Supported File Types

- **PDF** (`.pdf`) - Extracts text content from PDF documents
- **Word Documents** (`.docx`, `.doc`) - Extracts text from Microsoft Word files
- **Text Files** (`.txt`, `.md`) - Plain text and Markdown files

## File Limits

- **Maximum file size**: 10MB per file
- **Maximum files**: 5 files per upload
- **Total upload size**: 50MB maximum

## Processing Flow

### 1. File Upload
- User selects files through the web interface
- Files are validated for type and size
- Files are uploaded to the server

### 2. Content Extraction
- Each file is processed based on its type:
  - **PDF**: Uses `pdf-parse` library to extract text
  - **Word**: Uses `mammoth` library to extract text
  - **Text**: Direct file reading

### 3. Text Cleaning
- Removes HTML entities and boilerplate text
- Normalizes whitespace and punctuation
- Filters out common non-content elements

### 4. Content Chunking
- Splits documents into meaningful sections
- Identifies headers and natural breaks
- Assigns priority levels (high/medium/low) based on content

### 5. Embedding Generation
- Creates vector embeddings for each content chunk
- Stores in `company_content_chunks` table
- Enables RAG (Retrieval-Augmented Generation) functionality

### 6. FAQ Generation
- Uses AI to generate relevant FAQs from document content
- Creates 10-15 initial FAQs for admin review
- Stores in crawl session for approval workflow

### 7. Admin Review
- Admin can review, edit, and approve generated FAQs
- Approved FAQs are saved to the `faqs` table
- FAQs become available for the chat widget

## Backend Implementation

### API Endpoints

```javascript
POST /api/crawler/upload-documents
```

**Request:**
- `companyId` (string) - Company identifier
- `documents` (files) - Array of uploaded files

**Response:**
```json
{
  "success": true,
  "message": "Successfully processed X documents",
  "crawlSession": { ... }
}
```

### File Processing

The crawler class includes new methods:

- `processUploadedDocuments()` - Main processing function
- `extractDocumentContent()` - Extracts text from files
- `extractPDFContent()` - PDF text extraction
- `extractDOCXContent()` - Word document extraction
- `splitDocumentIntoSections()` - Content chunking
- `determineSectionPriority()` - Priority assignment

## Frontend Implementation

### UI Components

- **Mode Toggle**: Switch between "Website Crawl" and "Document Upload"
- **File Upload Area**: Drag-and-drop or browse file selection
- **File List**: Shows selected files with size and type
- **Progress Indicators**: Shows processing status

### State Management

- `crawlMode`: Tracks current mode ('website' | 'documents')
- `uploadedFiles`: Array of selected files
- `isUploading`: Upload processing status

## Database Schema

### Crawl Sessions
- `base_url`: Set to 'document_upload' for document processing
- `pages_crawled`: Number of files processed
- `ai_generated_faqs`: JSONB array of generated FAQs
- `ai_faqs_count`: Number of generated FAQs

### Content Chunks
- `content_type`: Set to 'document_section'
- `source_url`: Original filename
- `section_title`: Document section title
- `priority`: Content priority level

## Error Handling

### File Validation
- File type validation
- File size limits
- Upload error handling

### Processing Errors
- Text extraction failures
- Embedding generation errors
- Database save failures

## Security Considerations

- File type validation prevents malicious uploads
- File size limits prevent DoS attacks
- Temporary file cleanup after processing
- Input sanitization for extracted text

## Performance Optimizations

- Asynchronous file processing
- Content chunking for efficient embedding
- Priority-based content processing
- Memory-efficient text extraction

## Usage Example

1. User opens Content Processor modal
2. Selects "Document Upload" mode
3. Uploads PDF business documents
4. System processes documents and generates FAQs
5. Admin reviews and approves FAQs
6. FAQs become available in chat widget

## Integration with Existing Features

- Uses same FAQ generation pipeline as website crawling
- Integrates with existing admin review workflow
- Maintains same RAG functionality
- Compatible with existing analytics and reporting 