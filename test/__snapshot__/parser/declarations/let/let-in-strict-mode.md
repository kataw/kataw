# Kataw parser test case

## Input

`````js
'use strict'; let:0;

'use strict'; +implements;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 768,
                "start": 13,
                "end": 17
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 18,
                    "end": 19
                },
                "flags": 128,
                "start": 18,
                "end": 20
            },
            "flags": 128,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 67109633,
                "start": 20,
                "end": 34
            },
            "flags": 128,
            "start": 20,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 35,
                    "end": 37
                },
                "expression": {
                    "kind": 134299649,
                    "text": "implements",
                    "rawText": "implements",
                    "flags": 768,
                    "start": 37,
                    "end": 47
                },
                "flags": 256,
                "start": 35,
                "end": 47
            },
            "flags": 128,
            "start": 35,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "'use strict'; let:0;\n\n'use strict'; +implements;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

