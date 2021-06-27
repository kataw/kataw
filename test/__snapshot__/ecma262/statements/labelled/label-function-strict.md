# Kataw parser test case

## Input

`````js
"use strict";
foo: function() {}
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
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 13,
                "end": 17
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 17,
                "end": 18
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 18,
                    "end": 27
                },
                "asteriskToken": null,
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 32
                },
                "returnType": null,
                "flags": 16,
                "start": 18,
                "end": 32
            },
            "flags": 17,
            "start": 13,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "\"use strict\";\nfoo: function() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations can only be declared at top level or inside a block in strict mode - start: 18, end: 27
✖ Binding identifier expected - start: 27, end: 28

```

