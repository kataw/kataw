# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
const pure = () => {
    return (
        <Foo>
            {/*COMMENT*/}
        </Foo>
    );
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const pure = () => {\n    return (\n        <Foo>\n            {/*COMMENT*/}\n        </Foo>\n    );\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "pure",
                                "rawText": "pure",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 10
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 12
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 66224,
                                                    "expression": {
                                                        "kind": 66175,
                                                        "openingElement": {
                                                            "kind": 4228,
                                                            "tagName": {
                                                                "kind": 129,
                                                                "text": "Foo",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 43,
                                                                "end": 46
                                                            },
                                                            "attributes": {
                                                                "kind": 123,
                                                                "attributesList": [],
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 46,
                                                                "end": 46
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 33,
                                                            "end": 47
                                                        },
                                                        "children": {
                                                            "kind": 124,
                                                            "children": [
                                                                {
                                                                    "kind": 137,
                                                                    "text": "\n            ",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 8192,
                                                                    "parent": null,
                                                                    "start": 47,
                                                                    "end": 60
                                                                },
                                                                {
                                                                    "kind": 130,
                                                                    "ellipsis": false,
                                                                    "expression": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 8192,
                                                                    "start": 60,
                                                                    "end": 73
                                                                },
                                                                {
                                                                    "kind": 137,
                                                                    "text": "\n        ",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 8192,
                                                                    "parent": null,
                                                                    "start": 73,
                                                                    "end": 82
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 47,
                                                            "end": 82
                                                        },
                                                        "closingElement": {
                                                            "kind": 4221,
                                                            "tagName": {
                                                                "kind": 129,
                                                                "text": "Foo",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 84,
                                                                "end": 87
                                                            },
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 82,
                                                            "end": 88
                                                        },
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 33,
                                                        "end": 88
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 94
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 95
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 95
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 97
                                },
                                "flags": 536870912,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 97
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 97
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 97
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 97
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 97
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 97
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

