# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: false, module: true }
`````

## Input

`````js
/**
 * this is anonymous class.
 */
export default class {
    /**
     * this is method1.
     */
    method1(){
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "/**\n * this is anonymous class.\n */\nexport default class {\n    /**\n     * this is method1.\n     */\n    method1(){\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 48,
                "name": null,
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "method1",
                                    "rawText": "method1",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 110
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 112
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 113
                                    },
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 119
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 119
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 58,
                            "end": 119
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 58,
                    "end": 121
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 50,
                "end": 121
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 121
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
    "end": 121
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

