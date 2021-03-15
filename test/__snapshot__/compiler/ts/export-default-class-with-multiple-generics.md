# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class<T, U> {

}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default class<T, U> {\n\n}",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 48,
                "name": null,
                "typeParameters": {
                    "kind": 134226153,
                    "typeParameterList": [
                        {
                            "kind": 134226152,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 22
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 22
                        },
                        {
                            "kind": 134226152,
                            "name": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 21,
                    "end": 25
                },
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 28,
                    "end": 31
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 14,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

