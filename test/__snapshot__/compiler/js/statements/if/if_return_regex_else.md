# Kataw parser test case

## Input

`````js
function x(){
  if (x) return / /;
  else;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x(){\n  if (x) return / /;\n  else;\n}",
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
                                "kind": 2097346,
                                "expression": {
                                    "kind": 4260544,
                                    "text": "/ /",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 33
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 34
                            },
                            "alternate": {
                                "kind": 6291526,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 42
                            },
                            "isWebCompat": true,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 42
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 44
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
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

