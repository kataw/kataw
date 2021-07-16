# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
import('hello', 'world', '!');
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 201392131,
                            "text": "hello",
                            "rawText": "'hello'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 14
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 14
                    },
                    {
                        "kind": 201392131,
                        "text": "world",
                        "rawText": "'world'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 23
                    },
                    {
                        "kind": 201392131,
                        "text": "!",
                        "rawText": "'!'",
                        "flags": 4194400,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 28
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "import('hello', 'world', '!');",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Dynamic import must have one specifier as an argument. - start: 14, end: 15
✖ Expected a ')' to match the '(' token here - start: 14, end: 15
✖ '; ' expected - start: 28, end: 29

```

