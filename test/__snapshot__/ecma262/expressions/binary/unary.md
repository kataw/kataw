# Kataw parser test case

## Input

`````js
const anyTestFailures = !(
  aggregatedResults.numFailedTests === 0 &&
  aggregatedResults.numRuntimeErrorTestSuites === 0
);
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
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "anyTestFailures",
                            "rawText": "anyTestFailures",
                            "flags": 96,
                            "start": 5,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "aggregatedResults",
                                                "rawText": "aggregatedResults",
                                                "flags": 97,
                                                "start": 26,
                                                "end": 46
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "numFailedTests",
                                                "rawText": "numFailedTests",
                                                "flags": 96,
                                                "start": 47,
                                                "end": 61
                                            },
                                            "flags": 97,
                                            "start": 25,
                                            "end": 61
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 61,
                                            "end": 65
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 65,
                                            "end": 67
                                        },
                                        "flags": 97,
                                        "start": 25,
                                        "end": 67
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 67,
                                        "end": 70
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "aggregatedResults",
                                                "rawText": "aggregatedResults",
                                                "flags": 97,
                                                "start": 70,
                                                "end": 90
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "numRuntimeErrorTestSuites",
                                                "rawText": "numRuntimeErrorTestSuites",
                                                "flags": 96,
                                                "start": 91,
                                                "end": 116
                                            },
                                            "flags": 97,
                                            "start": 70,
                                            "end": 116
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "start": 116,
                                            "end": 120
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 120,
                                            "end": 122
                                        },
                                        "flags": 97,
                                        "start": 116,
                                        "end": 122
                                    },
                                    "flags": 97,
                                    "start": 25,
                                    "end": 122
                                },
                                "flags": 25,
                                "start": 32,
                                "end": 124
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 124
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 124
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 124
            },
            "flags": 33554448,
            "start": 0,
            "end": 125
        }
    ],
    "isModule": false,
    "source": "const anyTestFailures = !(\n  aggregatedResults.numFailedTests === 0 &&\n  aggregatedResults.numRuntimeErrorTestSuites === 0\n);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 125
}
```

### Printed

```javascript

const anyTestFailures =
    !(
      aggregatedResults.numFailedTests ===  0 &&  aggregatedResults.numRuntimeErrorTestSuites ===  0
    );
```

### Diagnostics

```javascript
✔ No errors
```

