# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: implem\u0065nts
## Input

`````js
function *f(){
  implem\u0065nts = x
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "implements",
                                    "rawText": "implem\\u0065nts",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 32
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 32,
                                    "end": 34
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 34,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 36
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 36
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 36
                },
                "flags": 256,
                "start": 13,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "function *f(){\n  implem\\u0065nts = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: implem\u0065nts
## Input

`````js
function *f(){
  implem\u0065nts = x
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: implem\u0065nts
## Input

`````js
function *f(){
  implem\u0065nts = x
}
`````
```

