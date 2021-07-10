# Kataw parser test case

## Input

`````js

      let x:
      |
       /* detached comment */ string;

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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": {
                                "kind": 134251592,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 21
                            },
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097217,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 58
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 58
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 10,
                        "end": 58
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 10,
                "end": 58
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "\n      let x:\n      |\n       /* detached comment */ string;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
let x: |
  /* detached comment */string;
```

### Diagnostics

```javascript
✔ No errors
```

