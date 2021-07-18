# Kataw parser test case

## Input

`````js
function functionName() {
  // indent to make the line break
  if (true) {
    this._aVeryLongVariableNameToForceLineBreak = new this.Promise(
      (resolve, reject) => {
        // do something
      }
    );
  }
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "functionName",
                "rawText": "functionName",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 21
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 65
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 71
                            },
                            "consequent": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 74,
                                                        "end": 83
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "_aVeryLongVariableNameToForceLineBreak",
                                                        "rawText": "_aVeryLongVariableNameToForceLineBreak",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 84,
                                                        "end": 122
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 74,
                                                    "end": 122
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 122,
                                                    "end": 124
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 210,
                                                            "newKeyword": {
                                                                "kind": 138477661,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 124,
                                                                "end": 128
                                                            },
                                                            "expression": {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 128,
                                                                "end": 133
                                                            },
                                                            "argumentList": null,
                                                            "flags": 96,
                                                            "transformFlags": 2048,
                                                            "start": 124,
                                                            "end": 133
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "Promise",
                                                            "rawText": "Promise",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 134,
                                                            "end": 141
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 124,
                                                        "end": 141
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 271,
                                                                "asyncKeyword": null,
                                                                "typeParameters": null,
                                                                "arrowPatameterList": {
                                                                    "kind": 342,
                                                                    "parameters": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "resolve",
                                                                            "rawText": "resolve",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 150,
                                                                            "end": 157
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "reject",
                                                                            "rawText": "reject",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 158,
                                                                            "end": 165
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 33,
                                                                    "transformFlags": 0,
                                                                    "start": 150,
                                                                    "end": 166
                                                                },
                                                                "returnType": null,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 166,
                                                                    "end": 169
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 33,
                                                                        "transformFlags": 0,
                                                                        "start": 171,
                                                                        "end": 171
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 169,
                                                                    "end": 203
                                                                },
                                                                "flags": 33,
                                                                "transformFlags": 0,
                                                                "start": 142,
                                                                "end": 203
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 142,
                                                        "end": 203
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 124,
                                                    "end": 209
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 74,
                                                "end": 209
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 74,
                                            "end": 210
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 210
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 214
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 214
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 214
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 23,
                "end": 216
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 216
        }
    ],
    "isModule": false,
    "source": "function functionName() {\n  // indent to make the line break\n  if (true) {\n    this._aVeryLongVariableNameToForceLineBreak = new this.Promise(\n      (resolve, reject) => {\n        // do something\n      }\n    );\n  }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 217
}
```

### Printed

```javascript
function functionName() // indent to make the line break
{
  // indent to make the line break
  if (true) {
      this._aVeryLongVariableNameToForceLineBreak = new this.Promise((resolve,
      reject) => {// do something
      });
    }
}
```

### Diagnostics

```javascript
✔ No errors
```

