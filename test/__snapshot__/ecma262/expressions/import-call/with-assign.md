# Kataw parser test case

## Input

`````js

import(source = "foo.js")

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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "start": 0,
                    "end": 7
                },
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "source",
                        "rawText": "source",
                        "flags": 96,
                        "start": 8,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "foo.js",
                        "rawText": "\"foo.js\"",
                        "flags": 96,
                        "start": 16,
                        "end": 25
                    },
                    "flags": 0,
                    "start": 8,
                    "end": 25
                },
                "flags": 32,
                "start": 7,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "\nimport(source = \"foo.js\")\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

import(source = "\"foo.js\"");
```

### Diagnostics

```javascript
✔ No errors
```

