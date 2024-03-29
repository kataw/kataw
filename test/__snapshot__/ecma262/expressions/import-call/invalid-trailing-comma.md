# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
import("foo",);
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
                            "text": "foo",
                            "rawText": "\"foo\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 12
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "import(\"foo\",);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Dynamic import must have one specifier as an argument. - start: 12, end: 13
✖ Expected a ')' to match the '(' token here - start: 12, end: 13
✖ Identifier expected - start: 13, end: 14

```

