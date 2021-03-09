# Kataw parser test case

## Input

`````js
class C { }
var c = C();


`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class C { }\nvar c = C();\n\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
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
                    "elements": [],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 11
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 11
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 15,
                                "end": 17
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 15,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 23
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 23
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

