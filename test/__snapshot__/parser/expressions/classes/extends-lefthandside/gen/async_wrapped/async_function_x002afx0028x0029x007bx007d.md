# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: async function *f(){}
## Input

`````js
async function p(){
  class C extends async function *f(){} {}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "p",
                "rawText": "p",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "members": {
                                "kind": 277,
                                "classHeritage": null,
                                "elements": [],
                                "flags": 32,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 29
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 29
                },
                "flags": 32,
                "start": 18,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 29
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 37,
                "end": 43
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 43,
                "end": 52
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 52,
                "end": 54
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 54,
                "end": 55
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 55,
                "end": 57
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 58,
                    "end": 58
                },
                "flags": 32,
                "start": 57,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 37,
            "end": 59
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 61,
                "end": 61
            },
            "flags": 16,
            "start": 59,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends async function *f(){} {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 37
✖ Declaration or statement expected - start: 62, end: 64

```

