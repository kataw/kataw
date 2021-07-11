while-statement6# Kataw parser test case

## Input

`````js
function test() {
    var x = "a";
    /*
    * test3
    */
    var y = 'a' + 'b';
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
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 17,
                                "end": 25
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "\"a\"",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 33
                                        },
                                        "flags": 16,
                                        "start": 25,
                                        "end": 33
                                    }
                                ],
                                "flags": 16,
                                "start": 25,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 17,
                            "end": 34
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 34,
                                "end": 68
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 68,
                                            "end": 70
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392131,
                                                "text": "a",
                                                "rawText": "'a'",
                                                "flags": 4194400,
                                                "start": 72,
                                                "end": 76
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 76,
                                                "end": 78
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "start": 78,
                                                "end": 82
                                            },
                                            "flags": 4194400,
                                            "start": 72,
                                            "end": 82
                                        },
                                        "flags": 16,
                                        "start": 68,
                                        "end": 82
                                    }
                                ],
                                "flags": 16,
                                "start": 68,
                                "end": 82
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 83
                        }
                    ],
                    "flags": 33,
                    "start": 17,
                    "end": 83
                },
                "flags": 32,
                "start": 15,
                "end": 85
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "function test() {\n    var x = \"a\";\n    /*\n    * test3\n    */\n    var y = 'a' + 'b';\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

function test() {
  var  x = "\"a\"" ;
   /*
    * test3
    */
  var  y = "'a'" + "'b'" ;
}

```

### Diagnostics

```javascript
✔ No errors
```

