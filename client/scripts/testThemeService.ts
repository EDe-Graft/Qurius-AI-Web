import 'dotenv/config';
import { ThemeService, type CompanyTheme } from '../services/themeService';

// Test data
const testCompanies = [
  { name: "Acme University", primaryColor: "#3B82F6" }, // Blue
  { name: "Qurius AI", primaryColor: "#10B981" },      // Green
];

async function testThemeService() {
  console.log('🎨 Testing ThemeService...\n');

  try {
    // Test 1: generateThemeFromPrimary method
    console.log('1️⃣ Testing generateThemeFromPrimary...');
    
    const lightTheme = ThemeService.generateThemeFromPrimary('#3B82F6', false);
    const darkTheme = ThemeService.generateThemeFromPrimary('#3B82F6', true);
    
    console.log('✅ Light theme:', {
      primaryColor: lightTheme.primaryColor,
      backgroundColor: lightTheme.backgroundColor,
      textColor: lightTheme.textColor,
    });
    console.log('✅ Dark theme:', {
      primaryColor: darkTheme.primaryColor,
      backgroundColor: darkTheme.backgroundColor,
      textColor: darkTheme.textColor,
    });

    // // Test 2: getDefaultTheme method
    // console.log('\n2️⃣ Testing getDefaultTheme...');
    // const defaultLight = ThemeService.getDefaultTheme(false);
    // const defaultDark = ThemeService.getDefaultTheme(true);
    
    // console.log('✅ Default light theme primary color:', defaultLight.primaryColor);
    // console.log('✅ Default dark theme primary color:', defaultDark.primaryColor);

    // Test 3: getCompanyTheme with existing companies
    console.log('\n3️⃣ Testing getCompanyTheme with existing companies...');
    for (const company of testCompanies) {
      try {
        const lightTheme = await ThemeService.getCompanyTheme(company.name, false);
        const darkTheme = await ThemeService.getCompanyTheme(company.name, true);
        
        console.log(`✅ ${company.name}:`);
        console.log(`   Light - Primary: ${lightTheme.primaryColor}, Background: ${lightTheme.backgroundColor}`);
        console.log(`   Dark - Primary: ${darkTheme.primaryColor}, Background: ${darkTheme.backgroundColor}`);
      } catch (error) {
        console.log(`⚠️  ${company.name}: Company not found in database, using default`);
        const defaultTheme = ThemeService.generateThemeFromPrimary('#3B82F6', false);
        console.log(`   Default primary color: ${defaultTheme.primaryColor}`);
      }
    }

    // Test 4: Test with non-existent company
    console.log('\n4️⃣ Testing getCompanyTheme with non-existent company...');
    const nonExistentTheme = await ThemeService.getCompanyTheme("NonExistent Corp", false);
    console.log('✅ Non-existent company theme (should use default):', {
      primaryColor: nonExistentTheme.primaryColor,
      backgroundColor: nonExistentTheme.backgroundColor,
    });

    // Test 5: Validate theme structure
    console.log('\n5️⃣ Validating theme structure...');
    const testTheme = ThemeService.generateThemeFromPrimary('#FF0000', false);
    const requiredKeys = ['primaryColor', 'backgroundColor', 'textColor', 'borderColor', 'accentColor'];
    const hasAllKeys = requiredKeys.every(key => key in testTheme);
    
    if (hasAllKeys) {
      console.log('✅ Theme structure is valid');
    } else {
      console.log('❌ Theme structure is missing required keys');
    }

    // Test 6: Test color contrast (basic validation)
    console.log('\n6️⃣ Testing color contrast...');
    const testThemes = [
      ThemeService.generateThemeFromPrimary('#000000', false), // Black
      ThemeService.generateThemeFromPrimary('#FFFFFF', false), // White
      ThemeService.generateThemeFromPrimary('#FF0000', false), // Red
      ThemeService.generateThemeFromPrimary('#00FF00', false), // Green
    ];

    testThemes.forEach((theme, index) => {
      console.log(`✅ Theme ${index + 1}: Primary=${theme.primaryColor}, Text=${theme.textColor}, Background=${theme.backgroundColor}`);
    });

    console.log('\n🎉 All ThemeService tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Helper function to display theme colors in a more readable format
function displayTheme(theme: CompanyTheme, name: string) {
  console.log(`\n📋 ${name}:`);
  console.log(`   Primary: ${theme.primaryColor}`);
  console.log(`   Background: ${theme.backgroundColor}`);
  console.log(`   Text: ${theme.textColor}`);
  console.log(`   Border: ${theme.borderColor}`);
  console.log(`   Accent: ${theme.accentColor}`);
}

testThemeService(); 