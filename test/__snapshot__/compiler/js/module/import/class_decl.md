# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
class x { import {x} from "y"; }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "class x { import {x} from \"y\"; }",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "import",
                                "rawText": "import",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 16
                            },
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 65538,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 9,
                            "end": 16
                        }
                    ],
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 16
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 65538,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 16
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        }
                    ],
                    "multiline": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 19
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "from",
                    "rawText": "from",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 25
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "y",
                    "rawText": "y",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 29
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 25,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 31,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

