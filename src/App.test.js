import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


  // If the message is in the input channel in either server
  if (message.channel.id === inputChannelId1 || message.channel.id === inputChannelId2) {
    // Get the output channel
    const outputChannel = client.channels.cache.get(outputChannelId);

    // If the output channel exists
    if (outputChannel) {
      // Check if it's a text-based channel
      if (outputChannel.isText()) {
        // Send the message content to the output channel
        outputChannel.send(message.content)
          .catch(console.error); // Log any errors
      } else {
        console.error(`Channel ${outputChannelId} is not a text-based channel`);
      }
    } else {
      console.error(`Channel ${outputChannelId} does not exist`);
    }
  }
});
