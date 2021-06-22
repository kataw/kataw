# Kataw parser test case

## Input

`````js
 async /* 1 */ (x/* 2 */ ?/* 3 */ :/* 4 */ string/* 5 */ )/* 6 */ :/* 7 */  string /* 8 */ => /* 9 */  {}
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
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 16,
                        "end": 17
                    },
                    "optionalToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 17,
                        "end": 26
                    },
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234347,
                            "flags": 2097216,
                            "start": 35,
                            "end": 49
                        },
                        "flags": 2097152,
                        "start": 35,
                        "end": 49
                    },
                    "right": null,
                    "flags": 32,
                    "start": 16,
                    "end": 49
                }
            ],
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "start": 67,
                    "end": 82
                },
                "flags": 2097152,
                "start": 67,
                "end": 82
            },
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 82,
                "end": 93
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 104,
                    "end": 104
                },
                "flags": 32,
                "start": 93,
                "end": 105
            },
            "flags": 288,
            "start": 0,
            "end": 105
        }
    ],
    "isModule": false,
    "source": " async /* 1 */ (x/* 2 */ ?/* 3 */ :/* 4 */ string/* 5 */ )/* 6 */ :/* 7 */  string /* 8 */ => /* 9 */  {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript

async /* 1 */ (x /* 2 */? /* 5 */) =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

