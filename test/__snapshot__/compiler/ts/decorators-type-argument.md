# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
@decorator<string>()
class Test {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "@decorator<string>()\nclass Test {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Test",
                "rawText": "Test",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 26,
                "end": 31
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 33,
                "end": 34
            },
            "decorators": {
                "kind": 64,
                "decoratorList": [
                    {
                        "kind": 63,
                        "expression": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "decorator",
                                "rawText": "decorator",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 10
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 11,
                                        "end": 17
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 11,
                                "end": 18
                            },
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 1,
                        "end": 20
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 1,
                "end": 20
            },
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

