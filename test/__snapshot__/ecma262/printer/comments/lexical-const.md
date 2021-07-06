# Kataw parser test case

## Input

`````js
const [/*1*/] = y;

const /*1*/ [/*2*/]/*3*/ = /*4*/y;


const /*1*/ [

/*2*/
y = b

/*3*/

]/*4*/ = /*5*/y;


const /*1*/ [

/*2*/
y /*3*/ = /*4*/b

/*5*/

]/*6*/ = /*7*/y;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 17
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 17
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 18,
                "end": 25
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 39
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 53
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 25,
                        "end": 53
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 25,
                "end": 53
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 18,
            "end": 54
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 54,
                "end": 62
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 70,
                                            "end": 79
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 83
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 83
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 93
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 107
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 62,
                        "end": 107
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 62,
                "end": 107
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 54,
            "end": 108
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 108,
                "end": 116
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 133
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 141,
                                            "end": 148
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 148
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1,
                                "transformFlags": 0,
                                "start": 124,
                                "end": 148
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 158
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 165,
                            "end": 172
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 116,
                        "end": 172
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 116,
                "end": 172
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 108,
            "end": 173
        }
    ],
    "isModule": false,
    "source": "const [/*1*/] = y;\n\nconst /*1*/ [/*2*/]/*3*/ = /*4*/y;\n\n\nconst /*1*/ [\n\n/*2*/\ny = b\n\n/*3*/\n\n]/*4*/ = /*5*/y;\n\n\nconst /*1*/ [\n\n/*2*/\ny /*3*/ = /*4*/b\n\n/*5*/\n\n]/*6*/ = /*7*/y;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 174
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 124, end: 133

```

