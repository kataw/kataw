# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\generator_wrapped
> :: test: generator wrapped
> :: case: super.foo
## Input

`````js
function *P(){
  class D extends super.foo {}
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
                "flags": 64,
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
                                "flags": 81,
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
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 24,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 96,
                                                "start": 32,
                                                "end": 38
                                            },
                                            "flags": 96,
                                            "start": 32,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "flags": 536870944,
                                        "start": 32,
                                        "end": 42
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 32,
                                    "end": 42
                                },
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 24,
                                "start": 32,
                                "end": 45
                            },
                            "flags": 17,
                            "start": 14,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 45
                },
                "flags": 32,
                "start": 13,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function *P(){\n  class D extends super.foo {}\n}",
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 32, end: 39

```

