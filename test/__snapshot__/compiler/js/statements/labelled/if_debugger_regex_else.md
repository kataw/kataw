# Kataw parser test case

## Input

`````js
function x(){
  if (x)
    debugger
    / /;
  else;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x(){\n  if (x)\n    debugger\n    / /;\n  else;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 21
                            },
                            "consequent": {
                                "kind": 6291518,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 35
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 35
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4260544,
                                "text": "/ /",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 43
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 44
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 44
                },
                "flags": 32769,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 44
            },
            "typeParameters": null,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 44
        },
        {
            "kind": 6291526,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 53,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

