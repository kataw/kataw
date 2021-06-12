# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: if (true) function* g() {  } else ;
## Input

`````js
"use strict"; if (true) function* g() {  } else ;
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
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "consequent": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 23,
                    "end": 32
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 32,
                    "end": 33
                },
                "name": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 33,
                    "end": 35
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 35,
                    "end": 37
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 42
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 272,
                "start": 23,
                "end": 42
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 42,
                "end": 47
            },
            "alternate": {
                "kind": 168,
                "flags": 16,
                "start": 47,
                "end": 49
            },
            "flags": 80,
            "start": 13,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; if (true) function* g() {  } else ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations inside if statements cannot be used in strict mode - start: 23, end: 32
✖ Generators can only be declared at the top level or inside a block - start: 33, end: 35

```

