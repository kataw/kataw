# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x}) => x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ident: [foo, bar]/x}) => x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67592,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 65545,
                        "elements": [
                            {
                                "kind": 89,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 33554598,
                                    "propertyList": {
                                        "kind": 33,
                                        "properties": [
                                            {
                                                "kind": 134217756,
                                                "left": {
                                                    "kind": 4325406,
                                                    "text": "ident",
                                                    "rawText": "ident",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 2,
                                                    "end": 7
                                                },
                                                "right": {
                                                    "kind": 65563,
                                                    "left": {
                                                        "kind": 67207686,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [
                                                                {
                                                                    "kind": 196712,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 10,
                                                                    "end": 13
                                                                },
                                                                {
                                                                    "kind": 196712,
                                                                    "text": "bar",
                                                                    "rawText": "bar",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 14,
                                                                    "end": 18
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 18
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 8,
                                                        "end": 19
                                                    },
                                                    "operator": "/",
                                                    "right": {
                                                        "kind": 196712,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 21
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 21
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 21
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 22
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 0,
                                "end": 23
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 23
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 28
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
