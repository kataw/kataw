# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\generator_wrapped
> :: test: generator wrapped
> :: case: /crap/
## Input

`````js
function *P(){
  class D extends /crap/ {}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function *P(){\n  class D extends /crap/ {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "P",
                "rawText": "P",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 48,
                            "name": {
                                "kind": 131102,
                                "text": "D",
                                "rawText": "D",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 52,
                                "expression": {
                                    "kind": 4260544,
                                    "text": "/crap/",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 39
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 39
                            },
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 41,
                                "end": 42
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 14,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 42
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

