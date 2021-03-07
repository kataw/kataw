# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
const pure = () => {
    return (
        <Foo
            // single
            /* block */
        >
        </Foo>
    );
}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const pure = () => {\n    return (\n        <Foo\n            // single\n            /* block */\n        >\n        </Foo>\n    );\n}\n",
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
                                                                "flags": 16384,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 46,
                                                                "end": 46
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 33,
                                                            "end": 102
                                                        },
                                                        "children": {
                                                            "kind": 124,
                                                            "children": [
                                                                {
                                                                    "kind": 137,
                                                                    "text": "\n        ",
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 8192,
                                                                    "parent": null,
                                                                    "start": 102,
                                                                    "end": 111
                                                                }
                                                            ],
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 102,
                                                            "end": 111
                                                        },
                                                        "closingElement": {
                                                            "kind": 4221,
                                                            "tagName": {
                                                                "kind": 129,
                                                                "text": "Foo",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 113,
                                                                "end": 116
                                                            },
                                                            "flags": 16384,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 111,
                                                            "end": 117
                                                        },
                                                        "flags": 16384,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 33,
                                                        "end": 117
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 123
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 124
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 124
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 126
                                },
                                "flags": 536887296,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 126
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 126
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 126
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 126
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 126
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 127
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

