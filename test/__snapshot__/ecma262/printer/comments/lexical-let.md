# Kataw parser test case

## Input

`````js
let {

/*1*/
a :/*2*/ b
} = y;

let {

/*1*/
a = /*2*/ b
} = y;


let {

/*1*/
.../*2*/a
} = y;;


let {

/*1*/
.../*2*/a /*3*/
} /*4*/ = /*5 */y;


let /* 1*/ {

/*2*/


/*3*/
.../*4*/a /*5*/
} /*6*/ = /*7 */y;


// detached!



let /* 1*/ {

/*2*/


/*3*/
.../*4*/a /*5*/
} /*6*/ = /*7 */y;

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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 23
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 5,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 25
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 29
            },
            "flags": 33554448,
            "start": 0,
            "end": 30
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 30,
                "end": 35
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 37,
                                            "end": 46
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 48,
                                            "end": 56
                                        },
                                        "flags": 0,
                                        "start": 37,
                                        "end": 56
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 37,
                                "end": 56
                            },
                            "flags": 32,
                            "start": 35,
                            "end": 58
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 60,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 62
                    }
                ],
                "flags": 17,
                "start": 35,
                "end": 62
            },
            "flags": 33554448,
            "start": 30,
            "end": 63
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 63,
                "end": 69
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "start": 71,
                                            "end": 82
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 82,
                                            "end": 88
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 71,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 71,
                                "end": 88
                            },
                            "flags": 32,
                            "start": 69,
                            "end": 90
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 92,
                            "end": 94
                        },
                        "flags": 16,
                        "start": 69,
                        "end": 94
                    }
                ],
                "flags": 17,
                "start": 69,
                "end": 94
            },
            "flags": 33554448,
            "start": 63,
            "end": 95
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 95,
            "end": 96
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 96,
                "end": 102
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "start": 104,
                                            "end": 115
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 115,
                                            "end": 121
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 104,
                                        "end": 121
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 104,
                                "end": 121
                            },
                            "flags": 32,
                            "start": 102,
                            "end": 129
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 137,
                            "end": 145
                        },
                        "flags": 16,
                        "start": 102,
                        "end": 145
                    }
                ],
                "flags": 17,
                "start": 102,
                "end": 145
            },
            "flags": 33554448,
            "start": 96,
            "end": 146
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 146,
                "end": 152
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "start": 161,
                                            "end": 180
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 180,
                                            "end": 186
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 161,
                                        "end": 186
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 161,
                                "end": 186
                            },
                            "flags": 32,
                            "start": 152,
                            "end": 194
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 202,
                            "end": 210
                        },
                        "flags": 16,
                        "start": 152,
                        "end": 210
                    }
                ],
                "flags": 17,
                "start": 152,
                "end": 210
            },
            "flags": 33554448,
            "start": 146,
            "end": 211
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 211,
                "end": 233
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "start": 242,
                                            "end": 261
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 261,
                                            "end": 267
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 242,
                                        "end": 267
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 242,
                                "end": 267
                            },
                            "flags": 32,
                            "start": 233,
                            "end": 275
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 283,
                            "end": 291
                        },
                        "flags": 16,
                        "start": 233,
                        "end": 291
                    }
                ],
                "flags": 17,
                "start": 233,
                "end": 291
            },
            "flags": 33554448,
            "start": 211,
            "end": 292
        }
    ],
    "isModule": false,
    "source": "let {\n\n/*1*/\na :/*2*/ b\n} = y;\n\nlet {\n\n/*1*/\na = /*2*/ b\n} = y;\n\n\nlet {\n\n/*1*/\n.../*2*/a\n} = y;;\n\n\nlet {\n\n/*1*/\n.../*2*/a /*3*/\n} /*4*/ = /*5 */y;\n\n\nlet /* 1*/ {\n\n/*2*/\n\n\n/*3*/\n.../*4*/a /*5*/\n} /*6*/ = /*7 */y;\n\n\n// detached!\n\n\n\nlet /* 1*/ {\n\n/*2*/\n\n\n/*3*/\n.../*4*/a /*5*/\n} /*6*/ = /*7 */y;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 293
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 88, end: 90
✖ Duplicate identifier - start: 121, end: 129
✖ Duplicate identifier - start: 186, end: 194
✖ Duplicate identifier - start: 267, end: 275

```

