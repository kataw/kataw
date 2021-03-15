# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var xGen, gen;

xGen = function* x() {};
gen = function*() {};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var xGen, gen;\n\nxGen = function* x() {};\ngen = function*() {};",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "xGen",
                            "rawText": "xGen",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 8
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 8
                    },
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 9,
                            "end": 13
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 9,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 13
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "xGen",
                    "rawText": "xGen",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "operator": "=",
                "right": {
                    "kind": 8915041,
                    "name": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 32,
                        "end": 34
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 36
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 38
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 39
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 128,
                    "start": 22,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 39
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 14,
            "end": 40
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "gen",
                    "rawText": "gen",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 44
                },
                "operator": "=",
                "right": {
                    "kind": 8915041,
                    "name": null,
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 58
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 60
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 61
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 128,
                    "start": 46,
                    "end": 61
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 40,
                "end": 61
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 40,
            "end": 62
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
    "end": 62
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

