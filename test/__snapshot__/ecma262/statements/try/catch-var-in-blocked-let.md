# Kataw parser test case

## Input

`````js
try {} catch (e) { { let e = x; } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 20,
                                                "end": 24
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "e",
                                                            "rawText": "e",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 28,
                                                            "end": 30
                                                        },
                                                        "flags": 16,
                                                        "start": 24,
                                                        "end": 30
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "flags": 33554448,
                                            "start": 20,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 20,
                                    "end": 31
                                },
                                "flags": 16,
                                "start": 18,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "start": 18,
                        "end": 33
                    },
                    "flags": 16,
                    "start": 16,
                    "end": 35
                },
                "flags": 80,
                "start": 6,
                "end": 35
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "try {} catch (e) { { let e = x; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

try {}
catch (e){
  {
    let  e = x ;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

