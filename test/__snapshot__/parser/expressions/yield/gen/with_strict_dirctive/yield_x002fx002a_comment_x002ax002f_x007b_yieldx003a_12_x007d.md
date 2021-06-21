# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */ { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; yield /* comment */ { yield: 12 }
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "start": 13,
            "end": 19
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 35,
                            "end": 41
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 41,
                            "end": 42
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "start": 42,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 42,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 35,
                "end": 45
            },
            "flags": 16,
            "start": 19,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield /* comment */ { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 35
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 35, end: 42

```

