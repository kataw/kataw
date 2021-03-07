# Kataw parser test case

## Input

`````js
abstract class AbstractRule {
    /**
     * @deprecated
     * Failures will be filtered based on `tslint:disable` comments by tslint.
     * This method now does nothing.
     */
    filterFailures() {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract class AbstractRule {\n    /**\n     * @deprecated\n     * Failures will be filtered based on `tslint:disable` comments by tslint.\n     * This method now does nothing.\n     */\n    filterFailures() {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "AbstractRule",
                    "rawText": "AbstractRule",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 27
                },
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
                                    "text": "filterFailures",
                                    "rawText": "filterFailures",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 199
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 200,
                                    "end": 201
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 203,
                                        "end": 203
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 201,
                                    "end": 204
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 204
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 29,
                            "end": 204
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 29,
                    "end": 206
                },
                "decorators": null,
                "flags": 268435456,
                "intersects": false,
                "transformFlags": 2097153,
                "start": 8,
                "end": 206
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 206
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 206
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

