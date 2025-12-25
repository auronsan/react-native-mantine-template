# React Native Mantine Template

A starter template for building React Native applications with [React Native Mantine](https://github.com/auronsan/react-native-mantine) - a beautiful and comprehensive component library ported from Mantine.

## Features

- **React Native Mantine** - Full-featured component library with 50+ components
- **Expo** - Best-in-class development experience
- **TypeScript** - Type-safe code with strict mode enabled
- **Pre-configured** - All necessary dependencies installed and configured
- **Example App** - Comprehensive button examples to get you started

## What's Included

This template includes:
- React Native Mantine v0.2.0
- Expo SDK 54
- TypeScript 5.9
- All required peer dependencies (expo-font, expo-linear-gradient, expo-clipboard)
- Example app showcasing Button component with multiple variants, sizes, and colors

## Quick Start

### Prerequisites

- Node.js 18+ installed
- iOS Simulator (for Mac users) or Android Studio (for Android development)
- Expo CLI (will be installed automatically)

### Installation

1. **Use this template** (if on GitHub)

   Click the "Use this template" button at the top of this repository, or clone it:

   ```bash
   git clone https://github.com/your-username/react-native-mantine-template.git my-app
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your device**

   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## Project Structure

```
react-native-mantine-template/
├── App.tsx                 # Main application component
├── assets/                 # Images, fonts, and other static files
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

## Using React Native Mantine

### Basic Example

```tsx
import { Theme, Button, Stack, Text } from 'react-native-mantine';

export default function App() {
  return (
    <Theme>
      <Stack spacing={12}>
        <Text>Hello from Mantine!</Text>
        <Button onPress={() => console.log('Clicked!')}>
          Click Me
        </Button>
      </Stack>
    </Theme>
  );
}
```

### Available Components

React Native Mantine includes 50+ components organized into categories:

**Core Components:**
- Button, ActionIcon, UnstyledButton
- Text, Title, Highlight
- Stack, Group, BoxView
- Input, TextInput, Textarea

**Layout Components:**
- Container, Center, Flex
- Grid, SimpleGrid
- Space, Divider

**Form Components:**
- Checkbox, Radio, Switch
- Select, MultiSelect, NativeSelect
- PasswordInput, NumberInput, PinInput
- Slider, Rating

**Feedback Components:**
- Badge, Loader, Progress
- Skeleton, Notification
- Modal, Dialog, Drawer

**Data Display:**
- Card, Paper, Avatar
- Table, List, Timeline
- Accordion, Collapse, Spoiler

**Navigation:**
- Anchor, NavLink, Breadcrumbs
- Pagination, Stepper, SegmentedControl

**Utilities:**
- Portal, Overlay, Transition
- Burger, CloseButton, CopyButton
- ThemeIcon, ColorSwatch, Indicator

For detailed documentation and examples, visit the [React Native Mantine GitHub repository](https://github.com/auronsan/react-native-mantine).

## Theme Customization

React Native Mantine comes with a comprehensive theming system. You can customize colors, sizes, and other theme properties:

```tsx
import { Theme } from 'react-native-mantine';

export default function App() {
  return (
    <Theme
      theme={{
        primaryColor: 'blue',
        colors: {
          // Customize your color palette
        },
      }}
    >
      {/* Your app content */}
    </Theme>
  );
}
```

## Common Issues

### Expo Font Loading

If you encounter font-related errors, make sure expo-font is properly installed:

```bash
npm install expo-font
```

### Metro Bundler Cache

If you experience strange errors, try clearing the Metro bundler cache:

```bash
npm start -- --clear
```

## Next Steps

1. Explore the example components in `App.tsx`
2. Check out the [React Native Mantine documentation](https://github.com/auronsan/react-native-mantine)
3. Start building your app by modifying `App.tsx`
4. Add new screens and navigation using [React Navigation](https://reactnavigation.org/)
5. Customize the theme to match your brand

## Resources

- [React Native Mantine GitHub](https://github.com/auronsan/react-native-mantine)
- [React Native Mantine NPM](https://www.npmjs.com/package/react-native-mantine)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Mantine (Web) Documentation](https://mantine.dev/) - Reference for component APIs

## Contributing

Found a bug or have a feature request? Please open an issue on the [React Native Mantine repository](https://github.com/auronsan/react-native-mantine/issues).

## License

This template is open source and available under the MIT License.

---

Built with [React Native Mantine](https://github.com/auronsan/react-native-mantine)
