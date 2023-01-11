# HTML to Jira content action

This action gets an html and converts it to Jira content.

## Inputs

### `html-input`

**Required** The HTML content.

## Outputs

### `jira-content-output`

The Jira content.

## Example usage

```yaml
uses: actions/HTML2JiraAction@v1.1
with:
 html-input: '<h1>hello</h1><p>this is my page </p><ol><li>first item</li><li>second item</li></ol>'
```