# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: `temp {waitforit} late`
## Input

`````js
async function p(){
  class C extends `temp {waitforit} late` {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "p",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 178,
                            "decorators": null,
                            "name": {
                                "kind": 81921,
                                "value": "C",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "expression": {
                                    "kind": 458761,
                                    "rawText": "temp {waitforit} late",
                                    "text": "temp {waitforit} late",
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 61
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 37,
                                "end": 61
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 63,
                                "end": 64
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 64
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 64
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 66
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "async function p(){\n  class C extends `temp {waitforit} late` {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: `temp {waitforit} late`
## Input

`````js
async function p(){
  class C extends `temp {waitforit} late` {}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: `temp {waitforit} late`
## Input

`````js
async function p(){
  class C extends `temp {waitforit} late` {}
}
`````
```

