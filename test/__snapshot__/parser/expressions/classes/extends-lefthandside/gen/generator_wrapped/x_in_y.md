# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: x in y
## Input

`````js
function *P(){
  class D extends x in y {}
}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "P",
                "rawText": "P",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 1,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 34
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 32,
                                "end": 34
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 32,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 34
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 34,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 39
                        },
                        {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 16,
                            "start": 39,
                            "end": 42
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 42
                },
                "flags": 32,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function *P(){\n  class D extends x in y {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 34, end: 37
✖ Expected a `;` - start: 39, end: 41

```

