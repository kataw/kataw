# Kataw parser test case

## Input

`````js
var a = {/* dangling */};
var b = {
  // dangling
};
var b = [/* dangling */];
function d() {
  /* dangling */
}
new Thing(/* dangling */);
Thing(/* dangling */);

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 24
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 31
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 33,
                            "end": 51
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 29,
                        "end": 51
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 52
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 52,
                "end": 56
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 58
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 62
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 60,
                            "end": 77
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 56,
                        "end": 77
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 56,
                "end": 77
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 52,
            "end": 78
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 78,
                "end": 87
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "transformFlags": 0,
                "start": 87,
                "end": 89
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 90,
                "end": 90
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 93,
                    "end": 93
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 91,
                "end": 112
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 78,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 116
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Thing",
                    "rawText": "Thing",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 122
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 123
                },
                "flags": 97,
                "transformFlags": 2048,
                "start": 112,
                "end": 138
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 112,
            "end": 139
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "Thing",
                    "rawText": "Thing",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 145
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 146,
                    "end": 146
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 139,
                "end": 161
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 139,
            "end": 162
        }
    ],
    "isModule": false,
    "source": "var a = {/* dangling */};\nvar b = {\n  // dangling\n};\nvar b = [/* dangling */];\nfunction d() {\n  /* dangling */\n}\nnew Thing(/* dangling */);\nThing(/* dangling */);\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 163
}
```

### Printed

```javascript
var a = {};
var b = {};

var b = [];

function d() {}

new Thing();

Thing();

```

### Diagnostics

```javascript
✔ No errors
```

