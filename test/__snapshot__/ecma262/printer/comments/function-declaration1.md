# Kataw parser test case

## Input

`````js
function x (/*1*/) {}

function x (/*1*/) { /*2*/ }

function x (/*1*/a,b/*2*/) {}

function x (/*1*/a,

b/*2*/) {}


function x (

/*2*/) {}

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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "flags": 32,
                "start": 18,
                "end": 21
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 21,
                "end": 31
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 35,
                "end": 35
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 43,
                    "end": 43
                },
                "flags": 32,
                "start": 41,
                "end": 51
            },
            "returnType": null,
            "flags": 16,
            "start": 21,
            "end": 51
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 51,
                "end": 61
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 61,
                "end": 63
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 65,
                        "end": 71
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 72,
                        "end": 73
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 65,
                "end": 73
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 81,
                    "end": 81
                },
                "flags": 32,
                "start": 79,
                "end": 82
            },
            "returnType": null,
            "flags": 16,
            "start": 51,
            "end": 82
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 82,
                "end": 92
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 92,
                "end": 94
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 96,
                        "end": 102
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 103,
                        "end": 106
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 96,
                "end": 106
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 114,
                    "end": 114
                },
                "flags": 32,
                "start": 112,
                "end": 115
            },
            "returnType": null,
            "flags": 16,
            "start": 82,
            "end": 115
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 115,
                "end": 126
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 126,
                "end": 128
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 130,
                "end": 130
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 140,
                    "end": 140
                },
                "flags": 32,
                "start": 138,
                "end": 141
            },
            "returnType": null,
            "flags": 16,
            "start": 115,
            "end": 141
        }
    ],
    "isModule": false,
    "source": "function x (/*1*/) {}\n\nfunction x (/*1*/) { /*2*/ }\n\nfunction x (/*1*/a,b/*2*/) {}\n\nfunction x (/*1*/a,\n\nb/*2*/) {}\n\n\nfunction x (\n\n/*2*/) {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 142
}
```

### Printed

```javascript

function x() {}
function x() {}
function x() /*2*/ {}
function x() /*2*/ {}
function x() {}
```

### Diagnostics

```javascript
✔ No errors
```

