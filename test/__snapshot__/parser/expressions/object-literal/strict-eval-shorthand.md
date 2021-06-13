# Kataw parser test case

## Input

`````js
"use strict"; (eval);

"use strict"; (eval = arguments);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "start": 15,
                    "end": 19
                },
                "flags": 32,
                "start": 13,
                "end": 20
            },
            "flags": 16,
            "start": 13,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 21,
                "end": 35
            },
            "flags": 16,
            "start": 21,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "eval",
                        "rawText": "eval",
                        "flags": 96,
                        "start": 38,
                        "end": 42
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 42,
                        "end": 44
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "arguments",
                        "rawText": "arguments",
                        "flags": 96,
                        "start": 44,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 36,
                    "end": 54
                },
                "flags": 32,
                "start": 36,
                "end": 55
            },
            "flags": 16,
            "start": 36,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (eval);\n\n\"use strict\"; (eval = arguments);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 42, end: 44

```

