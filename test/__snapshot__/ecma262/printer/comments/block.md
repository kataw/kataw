# Kataw parser test case

## Input

`````js
/*
Block comment for this script file.
*/
/*
Block comment for function f.
*/
function f() {}
/**
* JSDoc block comment.
* @param {string} a - Some string to test
*/
function g(a) {
  return a;
}
/*
Block comment for function h.
*/
function h() {
  /*
  Block comment inside of function h.
  */
  instruction1;
  /*
  Block comment for instruction 2 with a quote:
  > What was that?
  */
  instruction2;
  /*
  Block comment for instruction 3…
  …with several indented lines.
  */
  instruction3;
  /*
  Trailing block comment inside of function h.
  */
}
/*
Trailing block comment of this script file.
*/
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
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 86
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 86,
                "end": 88
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 89,
                "end": 89
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 92,
                    "end": 92
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 90,
                "end": 93
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 93
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 93,
                "end": 174
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 174,
                "end": 176
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
                        "transformFlags": 0,
                        "start": 177,
                        "end": 178
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 177,
                "end": 178
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 181,
                                "end": 190
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 192
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 181,
                            "end": 193
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 181,
                    "end": 193
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 179,
                "end": 195
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 93,
            "end": 195
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 195,
                "end": 240
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "h",
                "rawText": "h",
                "flags": 96,
                "transformFlags": 0,
                "start": 240,
                "end": 242
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 243,
                "end": 243
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction1",
                                "rawText": "instruction1",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 309
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 246,
                            "end": 310
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction2",
                                "rawText": "instruction2",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 402
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 310,
                            "end": 403
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "instruction3",
                                "rawText": "instruction3",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 403,
                                "end": 495
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 403,
                            "end": 496
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 496
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 244,
                "end": 555
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 195,
            "end": 555
        }
    ],
    "isModule": false,
    "source": "/*\nBlock comment for this script file.\n*/\n/*\nBlock comment for function f.\n*/\nfunction f() {}\n/**\n* JSDoc block comment.\n* @param {string} a - Some string to test\n*/\nfunction g(a) {\n  return a;\n}\n/*\nBlock comment for function h.\n*/\nfunction h() {\n  /*\n  Block comment inside of function h.\n  */\n  instruction1;\n  /*\n  Block comment for instruction 2 with a quote:\n  > What was that?\n  */\n  instruction2;\n  /*\n  Block comment for instruction 3…\n  …with several indented lines.\n  */\n  instruction3;\n  /*\n  Trailing block comment inside of function h.\n  */\n}\n/*\nTrailing block comment of this script file.\n*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 605
}
```

### Printed

```javascript
/*
Block comment for this script file.
*/
/*
Block comment for function f.
*/
/*
Block comment for this script file.
*/
/*
Block comment for function f.
*/
function f() {}
/**
* JSDoc block comment.
* @param {string} a - Some string to test
*/
function g(a) {
  return a;
}

/*
Block comment for function h.
*/
function h() /*
  Block comment inside of function h.
  */
{
  /*
  Block comment inside of function h.
  */
  instruction1;
  /*
  Block comment for instruction 2 with a quote:
  > What was that?
  */
  instruction2;
  /*
  Block comment for instruction 3…
  …with several indented lines.
  */
  instruction3;/*
  Trailing block comment inside of function h.
  */

}

```

### Diagnostics

```javascript
✔ No errors
```

