# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: async function wrap() { async function await() { } };
## Input

`````js
async function wrap() { async function await() { } };
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async function wrap() { async function await() { } };",
    "filename": "",
    "statements": [
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "wrap",
                "rawText": "wrap",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 14,
                "end": 19
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 21
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 1312785,
                            "name": {
                                "kind": 131102,
                                "text": "await",
                                "rawText": "await",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 38,
                                "end": 44
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 46
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 50
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 260,
                            "start": 23,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 50
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 52
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 260,
            "start": 0,
            "end": 52
        },
        {
            "kind": 6291526,
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 52,
            "end": 53
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
    "end": 53
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

