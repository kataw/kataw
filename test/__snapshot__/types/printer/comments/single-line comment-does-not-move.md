# Kataw parser test case

## Input

`````js
if (somethingGoesWrong) { // Why this comment goes to the next line...
  console.error('Something went wrong') // ...but this one doesn't?
}
`````

## Options

`````js
{ allowTypes : true }
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
                "text": "somethingGoesWrong",
                "rawText": "somethingGoesWrong",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 22
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "console",
                                        "rawText": "console",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 80
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "error",
                                        "rawText": "error",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 86
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 25,
                                    "end": 86
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "Something went wrong",
                                            "rawText": "'Something went wrong'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 87,
                                            "end": 109
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 109
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 25,
                                "end": 110
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 110
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 110
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 140
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 140
        }
    ],
    "isModule": false,
    "source": "if (somethingGoesWrong) { // Why this comment goes to the next line...\n  console.error('Something went wrong') // ...but this one doesn't?\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 140
}
```

### Printed

```javascript

if (somethingGoesWrong) {
    console.error("'Something went wrong'");
  }
```

### Diagnostics

```javascript
✔ No errors
```

