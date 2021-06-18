# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/gen/inside_a_generator_func
> :: test: inside a generator func
> :: case: inst\u0061nceof
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  inst\u0061nceof = x
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 14,
                                    "end": 14
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 16481,
                                    "start": 14,
                                    "end": 32
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "flags": 16417,
                    "start": 14,
                    "end": 32
                },
                "flags": 32,
                "start": 13,
                "end": 32
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 34,
                "end": 36
            },
            "flags": 16,
            "start": 34,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  inst\\u0061nceof = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 32
✖ Identifier expected - start: 32, end: 34
✖ Declaration or statement expected - start: 36, end: 38

```

