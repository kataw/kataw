# Kataw parser test case

## Input

`````js
function* a(b, c, d,/*1*/) { }

function* a(b, c, d/*1*/,/*2*/) { }

function* a(b, c, d/*1*/,


/*2*/) { }

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "start": 12,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 30
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 30
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 30,
                "end": 40
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 40,
                "end": 41
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 41,
                "end": 43
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 44,
                        "end": 45
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 46,
                        "end": 48
                    },
                    {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 49,
                        "end": 51
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "start": 44,
                "end": 57
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 65,
                    "end": 65
                },
                "flags": 32,
                "start": 63,
                "end": 67
            },
            "returnType": null,
            "flags": 272,
            "start": 30,
            "end": 67
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 67,
                "end": 77
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 77,
                "end": 78
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 78,
                "end": 80
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 81,
                        "end": 82
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 83,
                        "end": 85
                    },
                    {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 86,
                        "end": 88
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "start": 81,
                "end": 94
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 105,
                    "end": 105
                },
                "flags": 32,
                "start": 103,
                "end": 107
            },
            "returnType": null,
            "flags": 272,
            "start": 67,
            "end": 107
        }
    ],
    "isModule": false,
    "source": "function* a(b, c, d,/*1*/) { }\n\nfunction* a(b, c, d/*1*/,/*2*/) { }\n\nfunction* a(b, c, d/*1*/,\n\n\n/*2*/) { }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 108
}
```

### Printed

```javascript

  function* a(b, c, d,/*1*/) {}
  function* a(b, c, d /*1*/,/*2*/) {}
  function* a(b, c, d /*1*/,
     /*2*/) {}

```

### Diagnostics

```javascript
✔ No errors
```

