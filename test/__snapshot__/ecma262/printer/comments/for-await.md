# Kataw parser test case

## Input

`````js
async function x() {
/*1*/
for await /*2*/(x /*3*/of /*4*/ y) /*5*/ {}
}

async function x() {
/*1*/
for /*2*/ await /*3*/(x /*4*/of /*5*/ y/*6*/) /*7*/ {}

}

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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 30
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 36
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 44
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 52
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 60
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 69
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 70
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 70
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 70
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 72
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 72
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 72,
                "end": 79
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 79,
                "end": 88
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 88,
                "end": 90
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 91,
                "end": 91
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 104
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 116
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 124
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 124,
                                "end": 132
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 140
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 154,
                                    "end": 154
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 155
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 155
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 155
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 92,
                "end": 158
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 72,
            "end": 158
        }
    ],
    "isModule": false,
    "source": "async function x() {\n/*1*/\nfor await /*2*/(x /*3*/of /*4*/ y) /*5*/ {}\n}\n\nasync function x() {\n/*1*/\nfor /*2*/ await /*3*/(x /*4*/of /*5*/ y/*6*/) /*7*/ {}\n\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 159
}
```

### Printed

```javascript
async function x() /*1*/
{
  /*1*/
  for await/*2*/  (x /*3*/ of/*4*/  y)/*5*/  {}
}
async function x() /*1*/
{
  /*1*/
  for /*2*/ await/*3*/  (x /*4*/ of/*5*/  y /*6*/)/*7*/  {}
}

```

### Diagnostics

```javascript
✔ No errors
```

