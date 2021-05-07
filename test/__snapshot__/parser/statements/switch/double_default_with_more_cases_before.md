# Kataw parser test case

## Input

`````js
switch(x) { case y: break; case z: break; default: default: }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 11,
                            "end": 16
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "label": null,
                                "flags": 16,
                                "start": 19,
                                "end": 26
                            }
                        ],
                        "flags": 16,
                        "start": 11,
                        "end": 26
                    },
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 26,
                            "end": 31
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 40
                                },
                                "label": null,
                                "flags": 16,
                                "start": 34,
                                "end": 41
                            }
                        ],
                        "flags": 16,
                        "start": 26,
                        "end": 41
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 41,
                            "end": 49
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 41,
                        "end": 50
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 50,
                            "end": 58
                        },
                        "statements": [],
                        "flags": 16,
                        "start": 50,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "switch(x) { case y: break; case z: break; default: default: }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

switch(x
  case y:

  case z:

  default

  default

 
```

### Diagnostics

```javascript
✔ No errors
```

