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
            "flags": 4194400,
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
                "flags": 96,
                "start": 13,
                "end": 17
            },
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 17,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 18,
                    "end": 19
                },
                "flags": 16,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 4194401,
                "start": 20,
                "end": 34
            },
            "flags": 16,
            "start": 20,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 35,
                    "end": 37
                },
                "expression": {
                    "kind": 134299649,
                    "text": "implements",
                    "rawText": "implements",
                    "flags": 96,
                    "start": 37,
                    "end": 47
                },
                "flags": 32,
                "start": 35,
                "end": 47
            },
            "flags": 16,
            "start": 35,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "'use strict'; let:0;\n\n'use strict'; +implements;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'let' is a reserved word in strict mode - start: 17, end: 18
✖ Identifier expected. Reserved word in strict mode - start: 13, end: 18
✖ Identifier expected. Reserved word in strict mode - start: 37, end: 47

```

