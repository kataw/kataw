# Kataw parser test case

## Input

`````js
let {

/*1*/
a1 :/*2*/ b1
} = y;

let {

/*1*/
a = /*2*/ addd
} = y1;


let {

/*1*/
.../*2*/h1
} = y;;


let {

/*1*/
.../*2*/ja /*3*/
} /*4*/ = /*5 */y2;


let /* 1*/ {

/*2*/


/*3*/
.../*4*/aaa /*5*/
} /*6*/ = /*7 */yd;


// detached!



let /* 1*/ {

/*2*/


/*3*/
.../*4*/a3 /*5*/
} /*6*/ = /*7 */ady;

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
                "transformFlags": 0,
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
                                            "text": "a1",
                                            "rawText": "a1",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 15
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "b1",
                                            "rawText": "b1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 25
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 27
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 31
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 31
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 32,
                "end": 37
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
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 48
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "addd",
                                            "rawText": "addd",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 50,
                                            "end": 61
                                        },
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 39,
                                        "end": 61
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 61
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 63
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y1",
                            "rawText": "y1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 68
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 37,
                        "end": 68
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 37,
                "end": 68
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 32,
            "end": 69
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 69,
                "end": 75
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
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 88
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "h1",
                                            "rawText": "h1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 95
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 77,
                                        "end": 95
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 95
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 97
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 99,
                            "end": 101
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 75,
                        "end": 101
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 75,
                "end": 101
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 69,
            "end": 102
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 102,
            "end": 103
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 103,
                "end": 109
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
                                            "transformFlags": 0,
                                            "start": 111,
                                            "end": 122
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ja",
                                            "rawText": "ja",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 122,
                                            "end": 129
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 111,
                                        "end": 129
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 129
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 109,
                            "end": 137
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y2",
                            "rawText": "y2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 154
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 109,
                        "end": 154
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 109,
                "end": 154
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 103,
            "end": 155
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 155,
                "end": 161
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
                                            "transformFlags": 0,
                                            "start": 170,
                                            "end": 189
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "aaa",
                                            "rawText": "aaa",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 197
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 170,
                                        "end": 197
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 197
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 161,
                            "end": 205
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "yd",
                            "rawText": "yd",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 213,
                            "end": 222
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 161,
                        "end": 222
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 161,
                "end": 222
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 155,
            "end": 223
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 223,
                "end": 245
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
                                            "transformFlags": 0,
                                            "start": 254,
                                            "end": 273
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a3",
                                            "rawText": "a3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 273,
                                            "end": 280
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 254,
                                        "end": 280
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 254,
                                "end": 280
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 245,
                            "end": 288
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "ady",
                            "rawText": "ady",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 296,
                            "end": 306
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 245,
                        "end": 306
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 245,
                "end": 306
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 223,
            "end": 307
        }
    ],
    "isModule": false,
    "source": "let {\n\n/*1*/\na1 :/*2*/ b1\n} = y;\n\nlet {\n\n/*1*/\na = /*2*/ addd\n} = y1;\n\n\nlet {\n\n/*1*/\n.../*2*/h1\n} = y;;\n\n\nlet {\n\n/*1*/\n.../*2*/ja /*3*/\n} /*4*/ = /*5 */y2;\n\n\nlet /* 1*/ {\n\n/*2*/\n\n\n/*3*/\n.../*4*/aaa /*5*/\n} /*6*/ = /*7 */yd;\n\n\n// detached!\n\n\n\nlet /* 1*/ {\n\n/*2*/\n\n\n/*3*/\n.../*4*/a3 /*5*/\n} /*6*/ = /*7 */ady;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 308
}
```

### Printed

```javascript
let { a1: b1 } = y;
let { a = addd } = y1;

let { ...h1 } = y;

let { ...ja } = y2;

let { ...aaa } = yd;

let { ...a3 } = ady;

```

### Diagnostics

```javascript
✔ No errors
```

