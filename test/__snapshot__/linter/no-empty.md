# Kataw parser test case

## Input

`````js
if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}
`````

## Options

### Parser Options

`````js
{ allowTypes: true, lint: { noEmpty: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 12,
                "end": 19
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 27
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 12,
            "end": 29
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 81,
                "transformFlags": 0,
                "start": 29,
                "end": 37
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 38,
                "end": 41
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 44,
                "end": 44
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 29,
            "end": 46
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 46,
                "end": 51
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "doSomething",
                                    "rawText": "doSomething",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 69
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 70
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 53,
                                "end": 71
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 53,
                            "end": 72
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 72
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 51,
                "end": 74
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 80
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "ex",
                    "rawText": "ex",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 83
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 86
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 89
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 74,
                "end": 89
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "transformFlags": 0,
                "start": 89,
                "end": 97
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 99
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 97,
                "end": 102
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 102
        }
    ],
    "isModule": false,
    "source": "if (foo) {\n}\n\nwhile (foo) {\n}\n\nswitch(foo) {\n}\n\ntry {\n    doSomething();\n} catch(ex) {\n\n} finally {\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 102
}
```

### Printed

```javascript
if (foo) {}
while (foo) {}

switch (foo) {}

try {
  doSomething();
} catch (ex) {} finally {}

```

### Diagnostics

```javascript
✔ No errors
```

