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
                            "flags": 0,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 201392131,
                            "text": "foo",
                            "rawText": "\"foo\"",
                            "flags": 96,
                            "start": 7,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 12
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 13,
                        "end": 13
                    }
                ],
                "flags": 32,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "start": 6,
            "end": 13
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 14,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "import(\"foo\",);",
    "fileName": "__root__",
    "flags": 0,
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
✖ Expression expected - start: 13, end: 14

```

