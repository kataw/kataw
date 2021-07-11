# Kataw parser test case

## Input

`````js
let \u0061;
let in\u0061;
let in𝐬𝐭𝐚𝐧𝐜𝐞𝐨𝐟;
let 𝐢𝐧;
let \u0275ResourceLoaderImpl_BaseFactory;
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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "\\u0061",
                            "flags": 96,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 10
            },
            "flags": 33554448,
            "start": 0,
            "end": 11
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 11,
                "end": 15
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ina",
                            "rawText": "in\\u0061",
                            "flags": 96,
                            "start": 15,
                            "end": 24
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 15,
                        "end": 24
                    }
                ],
                "flags": 17,
                "start": 15,
                "end": 24
            },
            "flags": 33554448,
            "start": 11,
            "end": 25
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 25,
                "end": 29
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "in𝐬𝐭𝐚𝐧𝐜𝐞𝐨𝐟",
                            "rawText": "in𝐬𝐭𝐚𝐧𝐜𝐞𝐨𝐟",
                            "flags": 96,
                            "start": 29,
                            "end": 48
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 29,
                        "end": 48
                    }
                ],
                "flags": 17,
                "start": 29,
                "end": 48
            },
            "flags": 33554448,
            "start": 25,
            "end": 49
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 49,
                "end": 53
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𝐢𝐧",
                            "rawText": " 𝐢𝐧",
                            "flags": 96,
                            "start": 53,
                            "end": 58
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 53,
                        "end": 58
                    }
                ],
                "flags": 17,
                "start": 53,
                "end": 58
            },
            "flags": 33554448,
            "start": 49,
            "end": 59
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 59,
                "end": 63
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ɵResourceLoaderImpl_BaseFactory",
                            "rawText": "\\u0275ResourceLoaderImpl_BaseFactory",
                            "flags": 96,
                            "start": 63,
                            "end": 100
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 63,
                        "end": 100
                    }
                ],
                "flags": 17,
                "start": 63,
                "end": 100
            },
            "flags": 33554448,
            "start": 59,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "let \\u0061;\nlet in\\u0061;\nlet in𝐬𝐭𝐚𝐧𝐜𝐞𝐨𝐟;\nlet 𝐢𝐧;\nlet \\u0275ResourceLoaderImpl_BaseFactory;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript

let  \u0061 ;
let  in\u0061 ;
let  in𝐬𝐭𝐚𝐧𝐜𝐞𝐨𝐟 ;
let   𝐢𝐧 ;
let  \u0275ResourceLoaderImpl_BaseFactory ;

```

### Diagnostics

```javascript
✔ No errors
```

