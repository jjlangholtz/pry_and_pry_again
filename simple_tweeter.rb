require 'twitter'

# The SimpleTweeter wraps a full-featured Twitter client and allows for very
# simple tweeting. Credentials are read from a `.twitter.yml` config file.
#
# Example usage:
#   tweeter = SimpleTweeter.new
#   tweeter.tweet("If at first you don't succeed, Pry and Pry again!")
class SimpleTweeter
  def initialize
    @client = build_twitter_client
  end

  # Tweet a status update for the configured user.
  #
  # @param status [String] The text of your status update.
  # @return [Twitter::Tweet] The created Tweet.
  def tweet(status)
    @client.update(status)
  end

  def inspect
    'A simple Tweeter!'
  end

  private

  def build_twitter_client
    configuration = YAML.load_file('.twitter.yml')

    Twitter::REST::Client.new do |client|
      client.consumer_key = configuration['consumer_key']
      client.consumer_secret = configuration['consumer_secret']
      client.access_token = configuration['access_token']
      client.access_token_secret = configuration['access_token_secret']
    end
  end
end
